import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-official');
}

export default function OldSchoolTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-official" />;
}
