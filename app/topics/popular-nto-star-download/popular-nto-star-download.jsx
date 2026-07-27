import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-download');
}

export default function PopularNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-download" />;
}
