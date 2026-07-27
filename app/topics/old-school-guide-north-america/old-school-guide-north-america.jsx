import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-north-america');
}

export default function OldSchoolGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-north-america" />;
}
