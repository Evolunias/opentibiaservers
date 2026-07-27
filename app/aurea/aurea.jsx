import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('aurea');
}

export default function AureaPage() {
  return <StaticExactMatchPage slug="aurea" />;
}
