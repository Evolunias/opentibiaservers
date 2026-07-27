import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-guide');
}

export default function OldSchoolSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-guide" />;
}
