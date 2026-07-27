import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-usa');
}

export default function WithActivePlayersLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-usa" />;
}
