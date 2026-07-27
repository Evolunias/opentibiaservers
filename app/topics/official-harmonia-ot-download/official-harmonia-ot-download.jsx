import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-download');
}

export default function OfficialHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-download" />;
}
