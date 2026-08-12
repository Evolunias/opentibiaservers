import { notFound } from 'next/navigation';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getExactMatchPageData } from '@/lib/exact-match-page-data';
import { getCuratedPages } from '@/lib/curated-pages';
import { getOtServerCuratedPages } from '@/lib/otserver-curated-pages';
import { getOtlandServerGalaPages } from '@/lib/otland-server-gala-pages';
import { getTibiaWorldPages } from '@/lib/tibia-world-pages';

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  const params = [
    ...getCuratedPages().map((page) => ({ slug: page.slug })),
    ...getOtServerCuratedPages().map((page) => ({ slug: page.slug })),
    ...getOtlandServerGalaPages().map((page) => ({ slug: page.slug })),
    ...getTibiaWorldPages().map((page) => ({ slug: page.slug })),
  ];
  return Array.from(new Map(params.map((param) => [param.slug, param])).values());
}

export async function generateMetadata({ params }) {
  const page = getExactMatchPageData(params.slug);
  return page ? buildArticleMetadata(page) : {};
}

export default function ExactMatchCuratedPage({ params }) {
  const page = getExactMatchPageData(params.slug);
  if (!page) notFound();
  return <CuratedGuideArticle page={page} />;
}
