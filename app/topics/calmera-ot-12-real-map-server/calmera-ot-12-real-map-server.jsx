import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-real-map-server');
}

export default function CalmeraOt12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-real-map-server" />;
}
