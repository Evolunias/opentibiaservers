import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-download');
}

export default function OfficialCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-download" />;
}
