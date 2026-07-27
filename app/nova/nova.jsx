import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nova');
}

export default function NovaPage() {
  return <StaticExactMatchPage slug="nova" />;
}
