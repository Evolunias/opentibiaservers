import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-sweden');
}

export default function OlderaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-sweden" />;
}
