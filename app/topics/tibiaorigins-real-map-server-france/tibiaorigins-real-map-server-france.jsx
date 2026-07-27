import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-france');
}

export default function TibiaoriginsRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-france" />;
}
