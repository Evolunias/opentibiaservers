import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot');
}

export default function LowrateInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot" />;
}
