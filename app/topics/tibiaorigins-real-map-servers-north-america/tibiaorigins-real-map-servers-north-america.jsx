import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-north-america');
}

export default function TibiaoriginsRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-north-america" />;
}
