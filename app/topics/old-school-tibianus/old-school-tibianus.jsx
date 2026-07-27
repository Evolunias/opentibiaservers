import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus');
}

export default function OldSchoolTibianusKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus" />;
}
