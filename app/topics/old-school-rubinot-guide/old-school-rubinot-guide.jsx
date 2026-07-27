import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-guide');
}

export default function OldSchoolRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-guide" />;
}
