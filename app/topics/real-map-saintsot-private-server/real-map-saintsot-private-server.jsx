import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-private-server');
}

export default function RealMapSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-private-server" />;
}
