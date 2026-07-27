import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-sweden');
}

export default function ThorniaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-sweden" />;
}
