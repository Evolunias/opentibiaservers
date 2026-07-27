import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-ots');
}

export default function RealMapBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-ots" />;
}
