import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-argentina');
}

export default function NtoStarRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-argentina" />;
}
