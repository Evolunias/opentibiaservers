import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-mexico');
}

export default function MarolaotRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-mexico" />;
}
