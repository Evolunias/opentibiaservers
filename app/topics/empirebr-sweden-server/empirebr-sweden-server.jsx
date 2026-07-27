import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-sweden-server');
}

export default function EmpirebrSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-sweden-server" />;
}
