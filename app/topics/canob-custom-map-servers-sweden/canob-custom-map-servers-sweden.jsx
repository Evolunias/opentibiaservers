import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-sweden');
}

export default function CanobCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-sweden" />;
}
