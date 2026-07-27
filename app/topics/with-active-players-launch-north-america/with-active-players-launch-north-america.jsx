import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-north-america');
}

export default function WithActivePlayersLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-north-america" />;
}
