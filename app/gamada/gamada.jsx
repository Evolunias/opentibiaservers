import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('gamada');
}

export default function GamadaPage() {
  return <StaticExactMatchPage slug="gamada" />;
}
