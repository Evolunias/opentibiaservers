import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-sweden');
}

export default function ThorniaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-sweden" />;
}
