import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-brazil');
}

export default function RubinotCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-brazil" />;
}
