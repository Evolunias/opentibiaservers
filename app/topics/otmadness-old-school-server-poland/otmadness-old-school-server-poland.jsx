import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-poland');
}

export default function OtmadnessOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-poland" />;
}
