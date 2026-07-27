import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-sweden');
}

export default function RealeraRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-sweden" />;
}
