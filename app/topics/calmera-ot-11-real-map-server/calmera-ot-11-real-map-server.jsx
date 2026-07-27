import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-real-map-server');
}

export default function CalmeraOt11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-real-map-server" />;
}
