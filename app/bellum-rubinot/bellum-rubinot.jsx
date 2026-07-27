import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('bellum-rubinot');
}

export default function BellumRubinotPage() {
  return <StaticExactMatchPage slug="bellum-rubinot" />;
}
