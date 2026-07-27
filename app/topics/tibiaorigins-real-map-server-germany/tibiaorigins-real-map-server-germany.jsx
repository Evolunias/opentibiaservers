import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-germany');
}

export default function TibiaoriginsRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-germany" />;
}
