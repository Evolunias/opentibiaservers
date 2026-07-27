import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-canada');
}

export default function TibiaoriginsRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-canada" />;
}
