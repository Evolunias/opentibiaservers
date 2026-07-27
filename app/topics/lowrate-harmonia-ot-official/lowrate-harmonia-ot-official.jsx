import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-official');
}

export default function LowrateHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-official" />;
}
