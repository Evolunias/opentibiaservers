import { notFound } from 'next/navigation';
import { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import ServerSlugPage, { buildServerSlugMetadata } from '@/app/components/ServerSlugPage';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getExactMatchPageData } from '@/lib/exact-match-page-data';
import { getCuratedPages } from '@/lib/curated-pages';
import { getOtServerCuratedPages } from '@/lib/otserver-curated-pages';
import { getCommunityArchivePages } from '@/lib/community-archive-pages';
import { getTibiaWorldPages } from '@/lib/tibia-world-pages';
import { getStaticServerNameRoutes } from '@/lib/static-app-routes';

export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  const params = [
    ...getCuratedPages().map((page) => ({ slug: page.slug })),
    ...getOtServerCuratedPages().map((page) => ({ slug: page.slug })),
    ...getCommunityArchivePages().map((page) => ({ slug: page.slug })),
    ...getTibiaWorldPages().map((page) => ({ slug: page.slug })),
    ...getStaticServerNameRoutes().map((route) => ({ slug: route.slug })),
  ];
  return Array.from(new Map(params.map((param) => [param.slug, param])).values());
}

export async function generateMetadata({ params }) {
  const page = getExactMatchPageData(params.slug);
  if (page?.type === 'server') {
    return buildServerSlugMetadata(params.slug);
  }
  if (page) return buildArticleMetadata(page);
  // Fallback for filesystem / dynamic server names
  return buildCanonicalServerMetadata(params.slug);
}

export default async function ExactMatchCuratedPage({ params }) {
  const page = getExactMatchPageData(params.slug);
  if (page?.type === 'server') {
    return <ServerSlugPage slug={params.slug} />;
  }
  if (page) {
    return <CuratedGuideArticle page={page} />;
  }
  // Unknown curated topic — try server profile, else 404 inside ServerSlugPage/CanonicalServerRoute
  return <ServerSlugPage slug={params.slug} />;
}
