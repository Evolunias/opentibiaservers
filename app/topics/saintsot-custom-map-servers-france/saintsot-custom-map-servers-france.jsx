import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-france');
}

export default function SaintsotCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-france" />;
}
