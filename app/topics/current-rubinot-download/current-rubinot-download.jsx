import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-download');
}

export default function CurrentRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-download" />;
}
