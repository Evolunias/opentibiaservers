import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-brazil-server');
}

export default function EmpirebrBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-brazil-server" />;
}
