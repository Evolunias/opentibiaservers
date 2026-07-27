import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-list');
}

export default function OldSchoolTibiaServerListKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-list" />;
}
