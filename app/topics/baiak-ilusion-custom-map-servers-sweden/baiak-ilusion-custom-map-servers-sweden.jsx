import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-sweden');
}

export default function BaiakIlusionCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-sweden" />;
}
