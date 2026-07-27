import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-launch');
}

export default function TibiaRealMapServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-launch" />;
}
