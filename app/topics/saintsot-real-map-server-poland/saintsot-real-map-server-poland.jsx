import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-poland');
}

export default function SaintsotRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-poland" />;
}
