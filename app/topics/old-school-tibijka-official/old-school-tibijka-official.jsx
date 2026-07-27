import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-official');
}

export default function OldSchoolTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-official" />;
}
