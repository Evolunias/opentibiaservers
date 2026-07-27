import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-usa');
}

export default function EmpirebrFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-usa" />;
}
