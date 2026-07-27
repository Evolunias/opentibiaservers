import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-private-server');
}

export default function NewInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-private-server" />;
}
