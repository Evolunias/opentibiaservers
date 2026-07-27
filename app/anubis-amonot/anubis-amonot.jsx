import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('anubis-amonot');
}

export default function AnubisAmonotPage() {
  return <StaticExactMatchPage slug="anubis-amonot" />;
}
