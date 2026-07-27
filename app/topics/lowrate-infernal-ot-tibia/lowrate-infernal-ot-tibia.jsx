import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-tibia');
}

export default function LowrateInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-tibia" />;
}
