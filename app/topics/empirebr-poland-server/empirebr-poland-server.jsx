import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-poland-server');
}

export default function EmpirebrPolandServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-poland-server" />;
}
