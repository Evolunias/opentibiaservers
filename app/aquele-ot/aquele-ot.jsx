import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('aquele-ot');
}

export default function AqueleOtPage() {
  return <StaticExactMatchPage slug="aquele-ot" />;
}
