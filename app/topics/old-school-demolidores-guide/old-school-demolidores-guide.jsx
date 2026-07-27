import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-guide');
}

export default function OldSchoolDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-guide" />;
}
