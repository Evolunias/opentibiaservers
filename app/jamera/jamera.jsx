import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('jamera');
}

export default function JameraPage() {
  return <StaticExactMatchPage slug="jamera" />;
}
