import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-sweden');
}

export default function EvoluniaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-sweden" />;
}
