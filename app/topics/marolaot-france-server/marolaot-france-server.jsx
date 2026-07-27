import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-france-server');
}

export default function MarolaotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-france-server" />;
}
