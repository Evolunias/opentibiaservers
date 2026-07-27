import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-sweden');
}

export default function OxygenotRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-sweden" />;
}
