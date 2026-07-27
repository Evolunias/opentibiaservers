import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-launch');
}

export default function TibiaHighExpServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-launch" />;
}
