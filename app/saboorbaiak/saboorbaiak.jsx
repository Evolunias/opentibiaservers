import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('saboorbaiak');
}

export default function SaboorbaiakPage() {
  return <StaticExactMatchPage slug="saboorbaiak" />;
}
