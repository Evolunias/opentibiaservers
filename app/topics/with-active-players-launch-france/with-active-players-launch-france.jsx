import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-france');
}

export default function WithActivePlayersLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-france" />;
}
