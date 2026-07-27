import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-germany');
}

export default function NtoStarRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-germany" />;
}
