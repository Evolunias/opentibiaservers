import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-north-america');
}

export default function NoxiousotCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-north-america" />;
}
