import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-download');
}

export default function NewRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-download" />;
}
