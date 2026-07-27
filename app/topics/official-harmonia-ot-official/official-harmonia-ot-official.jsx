import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-official');
}

export default function OfficialHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-official" />;
}
