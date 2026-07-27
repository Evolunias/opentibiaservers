import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-private-server');
}

export default function ActiveInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-private-server" />;
}
