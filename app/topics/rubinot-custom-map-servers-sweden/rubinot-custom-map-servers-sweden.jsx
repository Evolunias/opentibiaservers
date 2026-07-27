import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-sweden');
}

export default function RubinotCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-sweden" />;
}
