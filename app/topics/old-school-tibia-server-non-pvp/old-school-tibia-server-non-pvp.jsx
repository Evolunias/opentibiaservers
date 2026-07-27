import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-non-pvp');
}

export default function OldSchoolTibiaServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-non-pvp" />;
}
