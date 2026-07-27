import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-guide');
}

export default function OldSchoolTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-guide" />;
}
