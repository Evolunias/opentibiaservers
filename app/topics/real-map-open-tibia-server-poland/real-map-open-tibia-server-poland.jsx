import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-poland');
}

export default function RealMapOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-poland" />;
}
