import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-real-map-server');
}

export default function CalmeraOt14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-real-map-server" />;
}
