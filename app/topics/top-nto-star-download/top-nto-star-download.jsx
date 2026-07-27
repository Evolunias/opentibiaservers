import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-download');
}

export default function TopNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-download" />;
}
