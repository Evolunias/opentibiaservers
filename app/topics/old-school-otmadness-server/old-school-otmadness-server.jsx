import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-server');
}

export default function OldSchoolOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-server" />;
}
