import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('premia');
}

export default function PremiaPage() {
  return <StaticExactMatchPage slug="premia" />;
}
