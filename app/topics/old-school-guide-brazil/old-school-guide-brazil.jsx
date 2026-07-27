import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-brazil');
}

export default function OldSchoolGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-brazil" />;
}
