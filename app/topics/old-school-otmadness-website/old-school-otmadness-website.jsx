import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-website');
}

export default function OldSchoolOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-website" />;
}
