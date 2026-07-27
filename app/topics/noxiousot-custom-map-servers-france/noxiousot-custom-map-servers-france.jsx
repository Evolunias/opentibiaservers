import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-france');
}

export default function NoxiousotCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-france" />;
}
