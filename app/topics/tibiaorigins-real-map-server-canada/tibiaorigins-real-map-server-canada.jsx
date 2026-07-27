import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-canada');
}

export default function TibiaoriginsRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-canada" />;
}
