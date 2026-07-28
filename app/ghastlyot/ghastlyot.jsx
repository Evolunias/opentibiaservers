import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ghastlyot');
}

export default function GhastlyotPage() {
  return <StaticExactMatchPage slug="ghastlyot" />;
}
