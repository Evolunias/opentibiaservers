import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-north-america');
}

export default function TibiascapeRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-north-america" />;
}
