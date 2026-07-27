import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-ots');
}

export default function OldSchoolTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-ots" />;
}
