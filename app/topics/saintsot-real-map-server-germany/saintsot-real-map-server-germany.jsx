import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-germany');
}

export default function SaintsotRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-germany" />;
}
