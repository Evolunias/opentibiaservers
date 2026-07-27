import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-download');
}

export default function ActiveRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-download" />;
}
