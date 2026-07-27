import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-sweden-servers');
}

export default function MarolaotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-sweden-servers" />;
}
