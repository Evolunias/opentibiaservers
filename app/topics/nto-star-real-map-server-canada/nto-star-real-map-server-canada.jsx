import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-canada');
}

export default function NtoStarRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-canada" />;
}
