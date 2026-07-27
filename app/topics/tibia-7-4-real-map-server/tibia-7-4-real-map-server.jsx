import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-real-map-server');
}

export default function Tibia74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-real-map-server" />;
}
