import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-mexico');
}

export default function SaintsotRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-mexico" />;
}
