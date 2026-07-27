import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-uk');
}

export default function OldSchoolPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-uk" />;
}
