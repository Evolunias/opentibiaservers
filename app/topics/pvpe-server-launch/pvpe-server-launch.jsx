import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-launch');
}

export default function PvpeServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-launch" />;
}
