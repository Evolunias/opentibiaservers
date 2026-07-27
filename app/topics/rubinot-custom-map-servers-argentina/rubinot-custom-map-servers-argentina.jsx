import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-argentina');
}

export default function RubinotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-argentina" />;
}
