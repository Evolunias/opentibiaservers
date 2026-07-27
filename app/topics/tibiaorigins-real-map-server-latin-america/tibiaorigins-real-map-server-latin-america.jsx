import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-latin-america');
}

export default function TibiaoriginsRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-latin-america" />;
}
