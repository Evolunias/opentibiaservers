import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-download');
}

export default function BestTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-download" />;
}
