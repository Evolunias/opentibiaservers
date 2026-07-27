import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('lightot');
}

export default function LightotPage() {
  return <StaticExactMatchPage slug="lightot" />;
}
