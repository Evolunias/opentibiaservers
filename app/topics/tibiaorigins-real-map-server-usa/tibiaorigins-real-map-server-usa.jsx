import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-usa');
}

export default function TibiaoriginsRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-usa" />;
}
