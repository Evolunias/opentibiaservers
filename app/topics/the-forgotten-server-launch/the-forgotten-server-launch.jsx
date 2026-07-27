import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-launch');
}

export default function TheForgottenServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-launch" />;
}
