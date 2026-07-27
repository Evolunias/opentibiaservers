import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('celenium-rubinot');
}

export default function CeleniumRubinotPage() {
  return <StaticExactMatchPage slug="celenium-rubinot" />;
}
