import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-ot');
}

export default function RealMapBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-ot" />;
}
