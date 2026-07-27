import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-argentina');
}

export default function EmpirebrFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-argentina" />;
}
