import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('original-legend-of-bleach');
}

export default function OriginalLegendOfBleachPage() {
  return <StaticExactMatchPage slug="original-legend-of-bleach" />;
}
