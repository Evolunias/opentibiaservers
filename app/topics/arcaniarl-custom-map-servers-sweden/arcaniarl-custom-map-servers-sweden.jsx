import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-sweden');
}

export default function ArcaniarlCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-sweden" />;
}
