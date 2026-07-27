import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-latin-america');
}

export default function EmpirebrFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-latin-america" />;
}
