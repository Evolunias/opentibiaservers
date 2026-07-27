import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-north-america');
}

export default function TibiaoriginsRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-north-america" />;
}
