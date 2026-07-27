import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-germany');
}

export default function TibijkaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-germany" />;
}
