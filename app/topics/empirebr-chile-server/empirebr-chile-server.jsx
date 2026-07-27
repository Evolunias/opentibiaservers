import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-chile-server');
}

export default function EmpirebrChileServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-chile-server" />;
}
