import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-download');
}

export default function BestTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-download" />;
}
