import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-north-america');
}

export default function MarolaotRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-north-america" />;
}
