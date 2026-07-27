import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-guide');
}

export default function OldSchoolAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-guide" />;
}
