import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-argentina');
}

export default function SaintsotRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-argentina" />;
}
