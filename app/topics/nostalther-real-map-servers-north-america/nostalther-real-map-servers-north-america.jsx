import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-north-america');
}

export default function NostaltherRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-north-america" />;
}
