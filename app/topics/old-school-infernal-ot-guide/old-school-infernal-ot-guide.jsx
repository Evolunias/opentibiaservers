import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-guide');
}

export default function OldSchoolInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-guide" />;
}
