import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-france');
}

export default function NoxiousotCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-france" />;
}
