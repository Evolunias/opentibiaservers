import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-official');
}

export default function OldSchoolOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-official" />;
}
