import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-canada');
}

export default function WithActivePlayersLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-canada" />;
}
