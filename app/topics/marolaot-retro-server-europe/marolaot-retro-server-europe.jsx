import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-europe');
}

export default function MarolaotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-europe" />;
}
