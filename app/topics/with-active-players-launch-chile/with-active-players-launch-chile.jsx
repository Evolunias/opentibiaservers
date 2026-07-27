import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-chile');
}

export default function WithActivePlayersLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-chile" />;
}
