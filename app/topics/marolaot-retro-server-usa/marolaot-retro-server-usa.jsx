import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-usa');
}

export default function MarolaotRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-usa" />;
}
