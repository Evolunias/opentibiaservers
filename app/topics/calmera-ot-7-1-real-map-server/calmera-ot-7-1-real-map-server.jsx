import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-real-map-server');
}

export default function CalmeraOt71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-real-map-server" />;
}
