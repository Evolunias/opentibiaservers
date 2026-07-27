import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-client');
}

export default function LowrateInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-client" />;
}
