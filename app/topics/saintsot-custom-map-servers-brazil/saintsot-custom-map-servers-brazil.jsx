import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-brazil');
}

export default function SaintsotCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-brazil" />;
}
