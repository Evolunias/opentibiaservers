import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-usa');
}

export default function OldSchoolGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-usa" />;
}
