import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('adlera');
}

export default function AdleraPage() {
  return <StaticExactMatchPage slug="adlera" />;
}
