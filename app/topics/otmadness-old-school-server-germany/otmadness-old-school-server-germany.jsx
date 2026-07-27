import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-germany');
}

export default function OtmadnessOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-germany" />;
}
