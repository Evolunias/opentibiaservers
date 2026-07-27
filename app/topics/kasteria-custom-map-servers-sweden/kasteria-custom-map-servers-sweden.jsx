import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-sweden');
}

export default function KasteriaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-sweden" />;
}
