import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-sweden');
}

export default function UnlineCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-sweden" />;
}
