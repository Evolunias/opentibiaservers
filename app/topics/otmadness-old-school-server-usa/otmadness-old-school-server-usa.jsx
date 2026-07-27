import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-usa');
}

export default function OtmadnessOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-usa" />;
}
