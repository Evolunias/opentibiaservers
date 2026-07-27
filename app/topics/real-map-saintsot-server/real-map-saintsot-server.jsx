import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-server');
}

export default function RealMapSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-server" />;
}
