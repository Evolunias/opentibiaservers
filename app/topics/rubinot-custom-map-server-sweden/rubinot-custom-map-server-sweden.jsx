import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-server-sweden');
}

export default function RubinotCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-server-sweden" />;
}
