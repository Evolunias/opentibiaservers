import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-servers');
}

export default function RealMapSaintsotServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-servers" />;
}
