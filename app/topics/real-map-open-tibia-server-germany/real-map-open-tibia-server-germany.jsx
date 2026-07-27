import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-germany');
}

export default function RealMapOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-germany" />;
}
