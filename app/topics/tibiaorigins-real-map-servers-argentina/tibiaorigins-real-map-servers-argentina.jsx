import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-argentina');
}

export default function TibiaoriginsRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-argentina" />;
}
