import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-sweden');
}

export default function TibiaoriginsRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-sweden" />;
}
