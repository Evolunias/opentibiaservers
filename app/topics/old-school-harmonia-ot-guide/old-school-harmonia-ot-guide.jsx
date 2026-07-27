import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-guide');
}

export default function OldSchoolHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-guide" />;
}
