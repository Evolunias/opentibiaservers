import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-guide');
}

export default function LowrateInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-guide" />;
}
