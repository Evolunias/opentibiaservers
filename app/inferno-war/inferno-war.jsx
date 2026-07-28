import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('inferno-war');
}

export default function InfernoWarPage() {
  return <StaticExactMatchPage slug="inferno-war" />;
}
