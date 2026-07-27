import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-south-america');
}

export default function TibiascapeRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-south-america" />;
}
