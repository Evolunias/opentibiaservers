import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-latin-america-servers');
}

export default function EmpirebrLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-latin-america-servers" />;
}
