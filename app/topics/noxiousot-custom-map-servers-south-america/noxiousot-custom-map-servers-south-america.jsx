import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-south-america');
}

export default function NoxiousotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-south-america" />;
}
