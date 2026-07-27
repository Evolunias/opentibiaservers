import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-guide');
}

export default function OldSchoolZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-guide" />;
}
