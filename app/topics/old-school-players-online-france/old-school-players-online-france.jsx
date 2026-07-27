import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-players-online-france');
}

export default function OldSchoolPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-players-online-france" />;
}
