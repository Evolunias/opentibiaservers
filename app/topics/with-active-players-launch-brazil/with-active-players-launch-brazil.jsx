import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-brazil');
}

export default function WithActivePlayersLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-brazil" />;
}
