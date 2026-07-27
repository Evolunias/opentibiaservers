import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-sweden');
}

export default function LumineraRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-sweden" />;
}
