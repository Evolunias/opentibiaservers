import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-poland');
}

export default function TibiaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-poland" />;
}
