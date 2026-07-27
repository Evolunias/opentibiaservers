import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-private-server');
}

export default function InfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-private-server" />;
}
