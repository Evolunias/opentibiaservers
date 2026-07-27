import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('thornia');
}

export default function ThorniaPage() {
  return <StaticExactMatchPage slug="thornia" />;
}
