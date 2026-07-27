import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-sweden');
}

export default function AureraGlobalCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-sweden" />;
}
