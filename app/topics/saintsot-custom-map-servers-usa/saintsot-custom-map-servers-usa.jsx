import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-usa');
}

export default function SaintsotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-usa" />;
}
