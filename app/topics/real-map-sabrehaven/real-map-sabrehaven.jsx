import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven');
}

export default function RealMapSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven" />;
}
