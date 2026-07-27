import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-private-server');
}

export default function LowrateInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-private-server" />;
}
