import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-guide');
}

export default function OldSchoolTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-guide" />;
}
