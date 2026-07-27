import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('isaworld');
}

export default function IsaworldPage() {
  return <StaticExactMatchPage slug="isaworld" />;
}
