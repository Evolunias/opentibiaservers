import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-sweden');
}

export default function ArcaniarlRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-sweden" />;
}
