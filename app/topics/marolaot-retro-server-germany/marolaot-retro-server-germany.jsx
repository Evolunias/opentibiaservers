import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-germany');
}

export default function MarolaotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-germany" />;
}
