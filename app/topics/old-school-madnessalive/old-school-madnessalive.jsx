import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive');
}

export default function OldSchoolMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive" />;
}
