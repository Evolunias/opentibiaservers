import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-tibia');
}

export default function HighrateInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-tibia" />;
}
