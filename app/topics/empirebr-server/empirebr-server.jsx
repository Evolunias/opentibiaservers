import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-server');
}

export default function EmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-server" />;
}
