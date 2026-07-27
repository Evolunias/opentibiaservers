import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-latin-america');
}

export default function TibiantisRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-latin-america" />;
}
