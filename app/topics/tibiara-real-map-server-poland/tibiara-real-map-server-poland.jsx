import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-poland');
}

export default function TibiaraRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-poland" />;
}
