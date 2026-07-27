import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-canada');
}

export default function OldSchoolGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-canada" />;
}
