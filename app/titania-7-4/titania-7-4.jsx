import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('titania-7-4');
}

export default function Titania74Page() {
  return <StaticExactMatchPage slug="titania-7-4" />;
}
