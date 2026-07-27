import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-mexico');
}

export default function SaintsotCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-mexico" />;
}
