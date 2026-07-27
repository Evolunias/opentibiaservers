import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-latin-america');
}

export default function OldSchoolGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-latin-america" />;
}
