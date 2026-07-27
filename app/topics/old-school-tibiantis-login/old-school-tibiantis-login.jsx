import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-login');
}

export default function OldSchoolTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-login" />;
}
