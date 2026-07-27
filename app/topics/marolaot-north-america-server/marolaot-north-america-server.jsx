import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-north-america-server');
}

export default function MarolaotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-north-america-server" />;
}
