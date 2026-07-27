import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-usa');
}

export default function SaintsotCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-usa" />;
}
