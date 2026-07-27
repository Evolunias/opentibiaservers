import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-with-players');
}

export default function OldSchoolTibiaServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-with-players" />;
}
