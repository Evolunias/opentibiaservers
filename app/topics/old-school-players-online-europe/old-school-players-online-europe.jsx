import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-europe');
}

export default function OldSchoolPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-europe" />;
}
