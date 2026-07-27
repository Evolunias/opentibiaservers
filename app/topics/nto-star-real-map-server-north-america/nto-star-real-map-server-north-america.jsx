import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-north-america');
}

export default function NtoStarRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-north-america" />;
}
