import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-client');
}

export default function RealMapSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-client" />;
}
