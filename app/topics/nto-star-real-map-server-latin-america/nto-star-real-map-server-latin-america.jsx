import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-latin-america');
}

export default function NtoStarRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-latin-america" />;
}
