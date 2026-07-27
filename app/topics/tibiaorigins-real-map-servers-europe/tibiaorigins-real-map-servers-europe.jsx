import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-europe');
}

export default function TibiaoriginsRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-europe" />;
}
