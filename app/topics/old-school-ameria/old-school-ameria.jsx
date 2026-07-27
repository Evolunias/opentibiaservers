import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria');
}

export default function OldSchoolAmeriaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria" />;
}
