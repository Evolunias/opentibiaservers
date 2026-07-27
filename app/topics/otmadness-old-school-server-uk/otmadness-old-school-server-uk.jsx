import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-uk');
}

export default function OtmadnessOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-uk" />;
}
