import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-argentina-servers');
}

export default function EmpirebrArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-argentina-servers" />;
}
