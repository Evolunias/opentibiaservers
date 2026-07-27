import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-download');
}

export default function OfficialRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-download" />;
}
