import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-france');
}

export default function MarolaotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-france" />;
}
