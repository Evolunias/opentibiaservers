import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-argentina-server');
}

export default function EmpirebrArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-argentina-server" />;
}
