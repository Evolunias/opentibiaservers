import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-sweden');
}

export default function TibiaoriginsRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-sweden" />;
}
