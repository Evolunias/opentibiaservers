import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-brazil');
}

export default function OtmadnessOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-brazil" />;
}
