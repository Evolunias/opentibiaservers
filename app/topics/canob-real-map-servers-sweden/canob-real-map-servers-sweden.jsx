import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-sweden');
}

export default function CanobRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-sweden" />;
}
