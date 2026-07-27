import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-server');
}

export default function OldSchoolMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-server" />;
}
