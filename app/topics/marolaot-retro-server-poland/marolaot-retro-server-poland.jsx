import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-poland');
}

export default function MarolaotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-poland" />;
}
