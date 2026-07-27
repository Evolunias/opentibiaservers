import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-poland-servers');
}

export default function EmpirebrPolandServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-poland-servers" />;
}
