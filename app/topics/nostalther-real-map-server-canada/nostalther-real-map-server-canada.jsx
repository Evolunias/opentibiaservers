import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-canada');
}

export default function NostaltherRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-canada" />;
}
