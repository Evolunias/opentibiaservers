import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-usa');
}

export default function OldSchoolPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-usa" />;
}
