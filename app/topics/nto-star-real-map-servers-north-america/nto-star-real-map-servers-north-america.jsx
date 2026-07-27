import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-servers-north-america');
}

export default function NtoStarRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-servers-north-america" />;
}
