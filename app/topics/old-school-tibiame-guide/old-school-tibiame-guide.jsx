import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-guide');
}

export default function OldSchoolTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-guide" />;
}
