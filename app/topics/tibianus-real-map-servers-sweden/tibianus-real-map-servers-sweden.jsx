import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-sweden');
}

export default function TibianusRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-sweden" />;
}
