import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('canary');
}

export default function CanaryPage() {
  return <StaticExactMatchPage slug="canary" />;
}
