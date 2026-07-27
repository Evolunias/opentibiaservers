import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-north-america');
}

export default function SaintsotCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-north-america" />;
}
