import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-north-america');
}

export default function TibiantisRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-north-america" />;
}
