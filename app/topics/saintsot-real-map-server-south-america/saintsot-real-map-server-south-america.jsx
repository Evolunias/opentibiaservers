import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-south-america');
}

export default function SaintsotRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-south-america" />;
}
