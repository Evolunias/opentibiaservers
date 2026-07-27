import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-germany');
}

export default function SaintsotRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-germany" />;
}
