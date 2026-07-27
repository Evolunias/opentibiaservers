import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-servers-latin-america');
}

export default function NtoStarRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-servers-latin-america" />;
}
