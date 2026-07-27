import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-europe');
}

export default function TibiaoriginsRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-europe" />;
}
