import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-chile');
}

export default function TibianusWithActivePlayersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-chile" />;
}
