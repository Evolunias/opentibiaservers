import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('celebra');
}

export default function CelebraPage() {
  return <StaticExactMatchPage slug="celebra" />;
}
