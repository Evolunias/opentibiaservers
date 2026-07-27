import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-canada');
}

export default function TibiantisRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-canada" />;
}
