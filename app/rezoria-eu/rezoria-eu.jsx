import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('rezoria-eu');
}

export default function RezoriaEuPage() {
  return <StaticExactMatchPage slug="rezoria-eu" />;
}
