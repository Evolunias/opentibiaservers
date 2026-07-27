import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-germany');
}

export default function OldSchoolPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-germany" />;
}
