import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-usa');
}

export default function SaintsotRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-usa" />;
}
