import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-download');
}

export default function LowrateRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-download" />;
}
