import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-germany');
}

export default function SaintsotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-germany" />;
}
