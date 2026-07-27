import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-ots');
}

export default function OldSchoolTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-ots" />;
}
