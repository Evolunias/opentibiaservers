import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tenebrium-rubinot');
}

export default function TenebriumRubinotPage() {
  return <StaticExactMatchPage slug="tenebrium-rubinot" />;
}
