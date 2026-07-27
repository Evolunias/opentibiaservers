import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-2026');
}

export default function OldSchoolTibiaServer2026KeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-2026" />;
}
