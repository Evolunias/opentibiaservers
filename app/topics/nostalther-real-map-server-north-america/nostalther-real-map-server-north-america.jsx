import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-north-america');
}

export default function NostaltherRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-north-america" />;
}
