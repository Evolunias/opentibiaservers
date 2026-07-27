import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-north-america-servers');
}

export default function MarolaotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-north-america-servers" />;
}
