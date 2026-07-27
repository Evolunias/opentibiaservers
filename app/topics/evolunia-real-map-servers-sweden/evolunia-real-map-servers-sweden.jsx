import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-sweden');
}

export default function EvoluniaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-sweden" />;
}
