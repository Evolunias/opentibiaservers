import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-sweden');
}

export default function TibiaraRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-sweden" />;
}
