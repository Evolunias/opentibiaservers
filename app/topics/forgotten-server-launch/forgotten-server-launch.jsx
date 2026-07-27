import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-launch');
}

export default function ForgottenServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-launch" />;
}
