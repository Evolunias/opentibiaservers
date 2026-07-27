import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ferobra');
}

export default function FerobraPage() {
  return <StaticExactMatchPage slug="ferobra" />;
}
