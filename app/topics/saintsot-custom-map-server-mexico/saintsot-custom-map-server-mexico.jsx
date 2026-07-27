import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-mexico');
}

export default function SaintsotCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-mexico" />;
}
