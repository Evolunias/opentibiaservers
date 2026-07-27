import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-south-america');
}

export default function TibiaoriginsRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-south-america" />;
}
