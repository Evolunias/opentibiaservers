import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-south-america');
}

export default function TibiascapeRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-south-america" />;
}
