import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-uk');
}

export default function WithActivePlayersLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-uk" />;
}
