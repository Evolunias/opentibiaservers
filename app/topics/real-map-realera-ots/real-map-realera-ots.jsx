import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-ots');
}

export default function RealMapRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-ots" />;
}
