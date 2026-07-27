import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-argentina-servers');
}

export default function MarolaotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-argentina-servers" />;
}
