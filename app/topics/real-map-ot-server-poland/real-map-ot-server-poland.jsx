import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-poland');
}

export default function RealMapOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-poland" />;
}
