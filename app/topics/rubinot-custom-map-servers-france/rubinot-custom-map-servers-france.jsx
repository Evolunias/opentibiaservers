import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-france');
}

export default function RubinotCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-france" />;
}
