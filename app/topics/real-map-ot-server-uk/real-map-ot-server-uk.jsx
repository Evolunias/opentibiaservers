import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-uk');
}

export default function RealMapOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-uk" />;
}
