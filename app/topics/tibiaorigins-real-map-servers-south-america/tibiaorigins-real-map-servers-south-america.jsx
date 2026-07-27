import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-south-america');
}

export default function TibiaoriginsRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-south-america" />;
}
