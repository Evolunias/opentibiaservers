import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('peloxia');
}

export default function PeloxiaPage() {
  return <StaticExactMatchPage slug="peloxia" />;
}
