import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-private-server');
}

export default function EmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-private-server" />;
}
