import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-latin-america');
}

export default function OtmadnessOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-latin-america" />;
}
