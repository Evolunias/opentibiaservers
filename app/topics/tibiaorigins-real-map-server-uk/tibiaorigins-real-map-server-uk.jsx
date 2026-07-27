import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-uk');
}

export default function TibiaoriginsRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-uk" />;
}
