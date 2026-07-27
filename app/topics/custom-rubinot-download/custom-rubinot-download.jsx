import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-download');
}

export default function CustomRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-download" />;
}
