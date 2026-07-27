import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-france');
}

export default function OtmadnessOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-france" />;
}
