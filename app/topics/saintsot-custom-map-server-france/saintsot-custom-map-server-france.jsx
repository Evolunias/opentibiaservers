import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-france');
}

export default function SaintsotCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-france" />;
}
