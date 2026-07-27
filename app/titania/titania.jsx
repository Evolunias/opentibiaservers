import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('titania');
}

export default function TitaniaPage() {
  return <StaticExactMatchPage slug="titania" />;
}
