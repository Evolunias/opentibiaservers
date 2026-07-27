import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-poland');
}

export default function TibijkaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-poland" />;
}
