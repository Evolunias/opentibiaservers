import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-sweden');
}

export default function ShadowcoresRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-sweden" />;
}
