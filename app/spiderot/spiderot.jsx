import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('spiderot');
}

export default function SpiderotPage() {
  return <StaticExactMatchPage slug="spiderot" />;
}
