import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-ots');
}

export default function OldSchoolOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-ots" />;
}
