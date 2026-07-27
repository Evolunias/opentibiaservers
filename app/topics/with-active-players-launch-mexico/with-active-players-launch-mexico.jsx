import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-mexico');
}

export default function WithActivePlayersLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-mexico" />;
}
