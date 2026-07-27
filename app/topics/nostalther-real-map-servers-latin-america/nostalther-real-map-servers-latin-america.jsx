import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-latin-america');
}

export default function NostaltherRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-latin-america" />;
}
