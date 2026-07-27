import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-launch');
}

export default function TibiaCustomServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-launch" />;
}
