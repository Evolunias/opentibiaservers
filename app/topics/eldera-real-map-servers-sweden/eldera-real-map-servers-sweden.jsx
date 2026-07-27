import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-sweden');
}

export default function ElderaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-sweden" />;
}
