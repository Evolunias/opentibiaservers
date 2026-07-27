import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-private-server');
}

export default function CurrentInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-private-server" />;
}
