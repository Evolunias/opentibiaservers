import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('epoca');
}

export default function EpocaPage() {
  return <StaticExactMatchPage slug="epoca" />;
}
