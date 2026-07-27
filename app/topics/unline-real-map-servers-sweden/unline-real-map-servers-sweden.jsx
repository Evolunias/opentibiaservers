import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-sweden');
}

export default function UnlineRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-sweden" />;
}
