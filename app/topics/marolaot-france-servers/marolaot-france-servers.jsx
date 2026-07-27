import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-france-servers');
}

export default function MarolaotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-france-servers" />;
}
