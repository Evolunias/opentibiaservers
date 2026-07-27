import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-argentina');
}

export default function TibiaoriginsRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-argentina" />;
}
