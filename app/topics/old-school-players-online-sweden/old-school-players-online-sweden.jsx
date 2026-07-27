import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-sweden');
}

export default function OldSchoolPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-sweden" />;
}
