import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-latin-america');
}

export default function OldSchoolPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-latin-america" />;
}
