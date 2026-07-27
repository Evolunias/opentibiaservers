import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-canada');
}

export default function OldSchoolPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-canada" />;
}
