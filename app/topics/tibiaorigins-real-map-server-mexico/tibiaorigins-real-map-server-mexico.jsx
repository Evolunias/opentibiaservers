import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-mexico');
}

export default function TibiaoriginsRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-mexico" />;
}
