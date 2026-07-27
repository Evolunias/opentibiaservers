import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('hiberna');
}

export default function HibernaPage() {
  return <StaticExactMatchPage slug="hiberna" />;
}
