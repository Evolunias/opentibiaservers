import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-official');
}

export default function OldSchoolTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-official" />;
}
