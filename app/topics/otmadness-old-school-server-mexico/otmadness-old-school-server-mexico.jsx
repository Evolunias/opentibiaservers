import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-mexico');
}

export default function OtmadnessOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-mexico" />;
}
