import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-germany');
}

export default function WithActivePlayersLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-germany" />;
}
