import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-mexico');
}

export default function NoxiousotCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-mexico" />;
}
