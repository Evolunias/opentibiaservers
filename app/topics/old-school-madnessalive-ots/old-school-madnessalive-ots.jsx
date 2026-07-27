import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-ots');
}

export default function OldSchoolMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-ots" />;
}
