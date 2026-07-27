import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-season');
}

export default function OldSchoolTibiaServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-season" />;
}
