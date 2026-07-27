import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('amera');
}

export default function AmeraPage() {
  return <StaticExactMatchPage slug="amera" />;
}
