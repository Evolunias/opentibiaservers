import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-latin-america');
}

export default function KasteriaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-latin-america" />;
}
