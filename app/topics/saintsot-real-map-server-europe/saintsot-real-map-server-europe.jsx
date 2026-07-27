import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-europe');
}

export default function SaintsotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-europe" />;
}
