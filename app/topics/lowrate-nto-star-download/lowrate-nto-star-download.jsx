import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-download');
}

export default function LowrateNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-download" />;
}
