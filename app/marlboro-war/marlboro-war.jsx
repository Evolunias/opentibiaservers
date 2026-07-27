import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('marlboro-war');
}

export default function MarlboroWarPage() {
  return <StaticExactMatchPage slug="marlboro-war" />;
}
