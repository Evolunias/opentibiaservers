import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-official');
}

export default function OldSchoolTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-official" />;
}
