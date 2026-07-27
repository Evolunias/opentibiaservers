import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-mexico');
}

export default function OldSchoolPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-mexico" />;
}
