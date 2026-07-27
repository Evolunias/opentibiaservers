import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-argentina');
}

export default function OldSchoolGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-argentina" />;
}
