import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-download');
}

export default function RubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="rubinot-download" />;
}
