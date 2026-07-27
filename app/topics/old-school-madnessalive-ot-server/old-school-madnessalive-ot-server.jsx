import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-ot-server');
}

export default function OldSchoolMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-ot-server" />;
}
