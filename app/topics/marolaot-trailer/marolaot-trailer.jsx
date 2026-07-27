import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-trailer');
}

export default function MarolaotTrailerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-trailer" />;
}
