import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-canada');
}

export default function NoxiousotCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-canada" />;
}
