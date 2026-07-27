import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-ot');
}

export default function LowrateInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-ot" />;
}
