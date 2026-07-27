import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-chile-servers');
}

export default function EmpirebrChileServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-chile-servers" />;
}
