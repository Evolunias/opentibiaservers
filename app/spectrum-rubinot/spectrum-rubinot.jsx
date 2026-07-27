import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('spectrum-rubinot');
}

export default function SpectrumRubinotPage() {
  return <StaticExactMatchPage slug="spectrum-rubinot" />;
}
