import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-ot-server');
}

export default function RealMapAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-ot-server" />;
}
