import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-sweden');
}

export default function OtmadnessOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-sweden" />;
}
