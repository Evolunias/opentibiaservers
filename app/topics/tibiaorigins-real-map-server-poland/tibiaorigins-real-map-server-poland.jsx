import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-poland');
}

export default function TibiaoriginsRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-poland" />;
}
