import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('road-to-shinigami');
}

export default function RoadToShinigamiPage() {
  return <StaticExactMatchPage slug="road-to-shinigami" />;
}
