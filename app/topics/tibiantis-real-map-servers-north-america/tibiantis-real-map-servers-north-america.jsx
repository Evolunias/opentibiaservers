import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-north-america');
}

export default function TibiantisRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-north-america" />;
}
