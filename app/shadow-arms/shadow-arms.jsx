import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('shadow-arms');
}

export default function ShadowArmsPage() {
  return <StaticExactMatchPage slug="shadow-arms" />;
}
