import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-server');
}

export default function RealMapAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-server" />;
}
