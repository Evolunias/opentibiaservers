import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-mexico');
}

export default function TibiaoriginsRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-mexico" />;
}
