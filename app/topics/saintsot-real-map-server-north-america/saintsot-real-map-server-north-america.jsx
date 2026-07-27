import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-north-america');
}

export default function SaintsotRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-north-america" />;
}
