import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-ots');
}

export default function LowrateInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-ots" />;
}
