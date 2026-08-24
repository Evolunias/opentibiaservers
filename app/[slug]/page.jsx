import { notFound, permanentRedirect } from 'next/navigation';
import { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getExactMatchPageData } from '@/lib/exact-match-page-data';
import { getCuratedPages } from '@/lib/curated-pages';
import { getOtServerCuratedPages } from '@/lib/otserver-curated-pages';
import { getOtlandServerGalaPages } from '@/lib/otland-server-gala-pages';
import { getServerReviewPage } from '@/lib/server-review-pages';
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
  if (page?.type === 'server') {
    return buildCanonicalServerMetadata(params.slug);
  }
  return page ? buildArticleMetadata(page) : {};
}

export default function ExactMatchCuratedPage({ params }) {
  const page = getExactMatchPageData(params.slug);
  if (!page) notFound();
  if (page.type === 'server') {
    const canonical = getServerReviewPage(params.slug);
    permanentRedirect(`/servers/${canonical?.slug || params.slug}`);
  }
  return <CuratedGuideArticle page={page} />;
}
