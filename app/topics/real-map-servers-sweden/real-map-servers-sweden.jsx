import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-sweden');
}

export default function RealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-sweden" />;
}
