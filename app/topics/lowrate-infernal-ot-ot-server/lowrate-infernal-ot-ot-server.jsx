import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-ot-server');
}

export default function LowrateInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-ot-server" />;
}
