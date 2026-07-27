import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-open-tibia');
}

export default function LowrateInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-open-tibia" />;
}
