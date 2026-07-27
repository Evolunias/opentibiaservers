import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-reviews-server-latin-america');
}

export default function ArchlightWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-reviews-server-latin-america" />;
}
