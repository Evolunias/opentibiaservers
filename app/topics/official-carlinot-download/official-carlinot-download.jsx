import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-download');
}

export default function OfficialCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-download" />;
}
