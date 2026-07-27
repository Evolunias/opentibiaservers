import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-ot');
}

export default function OldSchoolOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-ot" />;
}
