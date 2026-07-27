import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-south-america');
}

export default function NtoStarRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-south-america" />;
}
