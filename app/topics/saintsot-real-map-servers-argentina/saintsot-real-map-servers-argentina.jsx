import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-argentina');
}

export default function SaintsotRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-argentina" />;
}
