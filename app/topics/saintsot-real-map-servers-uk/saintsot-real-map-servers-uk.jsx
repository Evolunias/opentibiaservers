import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-uk');
}

export default function SaintsotRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-uk" />;
}
