import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rezoria');
}

export default function RezoriaPage() {
  return <StaticExactMatchPage slug="rezoria" />;
}
