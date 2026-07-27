import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-launch');
}

export default function FunServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="fun-server-launch" />;
}
