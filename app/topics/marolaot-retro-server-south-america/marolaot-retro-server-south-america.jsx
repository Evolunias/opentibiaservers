import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-south-america');
}

export default function MarolaotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-south-america" />;
}
