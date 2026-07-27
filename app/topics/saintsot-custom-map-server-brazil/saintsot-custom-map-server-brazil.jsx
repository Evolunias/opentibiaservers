import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-brazil');
}

export default function SaintsotCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-brazil" />;
}
