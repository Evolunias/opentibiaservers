import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-latin-america');
}

export default function TibiaoriginsRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-latin-america" />;
}
