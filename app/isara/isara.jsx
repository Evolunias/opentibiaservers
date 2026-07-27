import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('isara');
}

export default function IsaraPage() {
  return <StaticExactMatchPage slug="isara" />;
}
