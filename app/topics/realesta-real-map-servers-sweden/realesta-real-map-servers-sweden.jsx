import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-sweden');
}

export default function RealestaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-sweden" />;
}
