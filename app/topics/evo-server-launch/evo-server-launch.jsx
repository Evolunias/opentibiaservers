import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-launch');
}

export default function EvoServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="evo-server-launch" />;
}
