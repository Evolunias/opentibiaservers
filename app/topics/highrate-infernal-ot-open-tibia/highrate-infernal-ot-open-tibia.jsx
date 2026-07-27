import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-open-tibia');
}

export default function HighrateInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-open-tibia" />;
}
