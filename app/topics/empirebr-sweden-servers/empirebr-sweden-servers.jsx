import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-sweden-servers');
}

export default function EmpirebrSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-sweden-servers" />;
}
