import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-poland');
}

export default function WithActivePlayersLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-poland" />;
}
