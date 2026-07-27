import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-servers-germany');
}

export default function NtoStarRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-servers-germany" />;
}
