import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('cronfun');
}

export default function CronfunPage() {
  return <StaticExactMatchPage slug="cronfun" />;
}
