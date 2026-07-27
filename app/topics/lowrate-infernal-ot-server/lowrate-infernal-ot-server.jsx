import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-server');
}

export default function LowrateInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-server" />;
}
