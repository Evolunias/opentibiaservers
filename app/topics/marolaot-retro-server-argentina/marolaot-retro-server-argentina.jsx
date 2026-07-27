import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-argentina');
}

export default function MarolaotRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-argentina" />;
}
