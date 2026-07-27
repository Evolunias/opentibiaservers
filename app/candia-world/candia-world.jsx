import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('candia-world');
}

export default function CandiaWorldPage() {
  return <StaticExactMatchPage slug="candia-world" />;
}
