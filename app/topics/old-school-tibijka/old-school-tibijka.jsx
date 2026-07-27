import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka');
}

export default function OldSchoolTibijkaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka" />;
}
