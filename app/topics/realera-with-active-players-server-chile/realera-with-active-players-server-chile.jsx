import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-chile');
}

export default function RealeraWithActivePlayersServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-chile" />;
}
