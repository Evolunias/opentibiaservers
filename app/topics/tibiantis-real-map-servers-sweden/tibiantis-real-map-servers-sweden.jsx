import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-sweden');
}

export default function TibiantisRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-sweden" />;
}
