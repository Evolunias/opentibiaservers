import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-4-real-map-server');
}

export default function CalmeraOt84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-4-real-map-server" />;
}
