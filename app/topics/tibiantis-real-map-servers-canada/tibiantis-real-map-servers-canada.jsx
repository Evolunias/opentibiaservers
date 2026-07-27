import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-canada');
}

export default function TibiantisRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-canada" />;
}
