import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-uk');
}

export default function RealMapOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-uk" />;
}
