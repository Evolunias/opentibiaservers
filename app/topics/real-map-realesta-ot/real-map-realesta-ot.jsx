import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-ot');
}

export default function RealMapRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-ot" />;
}
