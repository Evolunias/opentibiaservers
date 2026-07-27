import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-login');
}

export default function OldSchoolOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-login" />;
}
