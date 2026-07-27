import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-canada');
}

export default function NostaltherRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-canada" />;
}
