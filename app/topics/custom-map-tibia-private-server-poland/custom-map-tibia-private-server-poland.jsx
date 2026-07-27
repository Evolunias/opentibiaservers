import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-poland');
}

export default function CustomMapTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-poland" />;
}
