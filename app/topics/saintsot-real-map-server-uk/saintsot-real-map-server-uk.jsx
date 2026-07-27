import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-uk');
}

export default function SaintsotRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-uk" />;
}
