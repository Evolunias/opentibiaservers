import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-download');
}

export default function OfficialMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-download" />;
}
