import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('astera');
}

export default function AsteraPage() {
  return <StaticExactMatchPage slug="astera" />;
}
