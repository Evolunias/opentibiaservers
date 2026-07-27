import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-download');
}

export default function OfficialInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-download" />;
}
