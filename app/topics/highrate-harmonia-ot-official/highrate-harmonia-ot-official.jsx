import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-official');
}

export default function HighrateHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-official" />;
}
