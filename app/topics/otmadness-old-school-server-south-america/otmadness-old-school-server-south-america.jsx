import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-south-america');
}

export default function OtmadnessOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-south-america" />;
}
