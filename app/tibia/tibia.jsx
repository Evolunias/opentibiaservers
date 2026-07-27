import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibia');
}

export default function TibiaPage() {
  return <StaticExactMatchPage slug="tibia" />;
}
