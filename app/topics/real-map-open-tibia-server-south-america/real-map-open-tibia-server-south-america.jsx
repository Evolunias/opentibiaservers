import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-south-america');
}

export default function RealMapOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-south-america" />;
}
