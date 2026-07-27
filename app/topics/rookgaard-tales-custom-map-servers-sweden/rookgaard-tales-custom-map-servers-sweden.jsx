import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-sweden');
}

export default function RookgaardTalesCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-sweden" />;
}
