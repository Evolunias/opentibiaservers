import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-argentina');
}

export default function SaintsotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-argentina" />;
}
