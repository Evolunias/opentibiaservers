import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-brazil-servers');
}

export default function EvoleraBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-brazil-servers" />;
}
