import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-brazil-servers');
}

export default function EmpirebrBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-brazil-servers" />;
}
