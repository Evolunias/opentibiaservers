import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-argentina');
}

export default function OtmadnessOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-argentina" />;
}
