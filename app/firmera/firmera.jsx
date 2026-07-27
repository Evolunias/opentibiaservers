import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('firmera');
}

export default function FirmeraPage() {
  return <StaticExactMatchPage slug="firmera" />;
}
