import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-1-real-map-server');
}

export default function CalmeraOt81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-1-real-map-server" />;
}
