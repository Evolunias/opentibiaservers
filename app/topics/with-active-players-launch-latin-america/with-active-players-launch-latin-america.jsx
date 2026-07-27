import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-latin-america');
}

export default function WithActivePlayersLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-latin-america" />;
}
