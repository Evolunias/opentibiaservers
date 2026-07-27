import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-guide');
}

export default function OldSchoolNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-guide" />;
}
