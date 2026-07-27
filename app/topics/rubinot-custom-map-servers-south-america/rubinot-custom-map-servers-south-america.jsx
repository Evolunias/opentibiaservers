import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-south-america');
}

export default function RubinotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-south-america" />;
}
