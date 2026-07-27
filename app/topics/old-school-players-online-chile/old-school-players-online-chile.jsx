import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-chile');
}

export default function OldSchoolPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-chile" />;
}
