import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-servers-sweden');
}

export default function TibianusCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-servers-sweden" />;
}
