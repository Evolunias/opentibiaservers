import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-sweden');
}

export default function ShadowcoresCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-sweden" />;
}
