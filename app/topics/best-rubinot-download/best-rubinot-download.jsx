import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-download');
}

export default function BestRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-download" />;
}
