import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-official');
}

export default function HighrateInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-official" />;
}
