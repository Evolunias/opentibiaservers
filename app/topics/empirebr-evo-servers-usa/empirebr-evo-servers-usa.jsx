import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-servers-usa');
}

export default function EmpirebrEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-servers-usa" />;
}
