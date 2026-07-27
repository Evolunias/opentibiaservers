import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-servers-sweden');
}

export default function BaiakIlusionRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-servers-sweden" />;
}
