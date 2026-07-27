import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-login');
}

export default function OldSchoolTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-login" />;
}
