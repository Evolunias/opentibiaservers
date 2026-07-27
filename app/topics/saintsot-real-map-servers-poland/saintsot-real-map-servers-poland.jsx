import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-poland');
}

export default function SaintsotRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-poland" />;
}
