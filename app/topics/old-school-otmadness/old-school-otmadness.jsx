import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness');
}

export default function OldSchoolOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness" />;
}
