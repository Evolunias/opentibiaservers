import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-canada');
}

export default function MarolaotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-canada" />;
}
