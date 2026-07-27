import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-brazil-server');
}

export default function EvoleraBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-brazil-server" />;
}
