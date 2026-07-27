import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-sweden');
}

export default function RubinotRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-sweden" />;
}
