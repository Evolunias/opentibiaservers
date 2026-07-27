import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('reaperot');
}

export default function ReaperotPage() {
  return <StaticExactMatchPage slug="reaperot" />;
}
