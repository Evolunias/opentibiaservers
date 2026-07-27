import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-guide');
}

export default function OldSchoolOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-guide" />;
}
