import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-private-server');
}

export default function NoResetInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-private-server" />;
}
