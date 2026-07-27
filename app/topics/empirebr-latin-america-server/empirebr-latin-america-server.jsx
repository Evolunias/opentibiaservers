import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-latin-america-server');
}

export default function EmpirebrLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-latin-america-server" />;
}
