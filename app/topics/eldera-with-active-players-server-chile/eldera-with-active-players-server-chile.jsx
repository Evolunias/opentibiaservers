import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-chile');
}

export default function ElderaWithActivePlayersServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-chile" />;
}
