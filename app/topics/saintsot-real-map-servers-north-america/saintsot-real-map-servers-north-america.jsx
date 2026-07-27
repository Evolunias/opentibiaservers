import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-north-america');
}

export default function SaintsotRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-north-america" />;
}
