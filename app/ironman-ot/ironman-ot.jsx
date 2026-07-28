import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ironman-ot');
}

export default function IronmanOtPage() {
  return <StaticExactMatchPage slug="ironman-ot" />;
}
