import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-north-america');
}

export default function OtmadnessOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-north-america" />;
}
