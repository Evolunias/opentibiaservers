import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-europe');
}

export default function SaintsotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-europe" />;
}
