import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-client');
}

export default function OldSchoolOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-client" />;
}
