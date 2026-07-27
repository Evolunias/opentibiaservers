import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-north-america');
}

export default function OldSchoolPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-north-america" />;
}
