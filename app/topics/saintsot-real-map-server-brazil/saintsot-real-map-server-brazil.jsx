import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-brazil');
}

export default function SaintsotRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-brazil" />;
}
