import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-login');
}

export default function OldSchoolTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-login" />;
}
