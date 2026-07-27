import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-poland');
}

export default function OldSchoolPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-poland" />;
}
