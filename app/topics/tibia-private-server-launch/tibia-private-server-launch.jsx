import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-launch');
}

export default function TibiaPrivateServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-launch" />;
}
