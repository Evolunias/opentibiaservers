import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-ot');
}

export default function RealMapRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-ot" />;
}
