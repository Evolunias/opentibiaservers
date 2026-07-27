import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis');
}

export default function OldSchoolTibiantisKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis" />;
}
