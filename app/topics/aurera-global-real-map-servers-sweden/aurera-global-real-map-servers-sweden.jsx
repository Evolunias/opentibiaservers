import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-servers-sweden');
}

export default function AureraGlobalRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-servers-sweden" />;
}
