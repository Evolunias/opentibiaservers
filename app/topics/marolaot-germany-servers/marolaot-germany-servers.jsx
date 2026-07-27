import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-germany-servers');
}

export default function MarolaotGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-germany-servers" />;
}
