import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-north-america');
}

export default function NoxiousotCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-north-america" />;
}
