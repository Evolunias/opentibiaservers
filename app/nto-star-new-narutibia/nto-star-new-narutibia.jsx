import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nto-star-new-narutibia');
}

export default function NtoStarNewNarutibiaPage() {
  return <StaticExactMatchPage slug="nto-star-new-narutibia" />;
}
