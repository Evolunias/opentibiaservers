import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-france');
}

export default function MarolaotRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-france" />;
}
