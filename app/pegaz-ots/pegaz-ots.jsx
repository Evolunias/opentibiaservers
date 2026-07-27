import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('pegaz-ots');
}

export default function PegazOtsPage() {
  return <StaticExactMatchPage slug="pegaz-ots" />;
}
