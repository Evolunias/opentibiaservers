import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-sweden');
}

export default function KasteriaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-sweden" />;
}
