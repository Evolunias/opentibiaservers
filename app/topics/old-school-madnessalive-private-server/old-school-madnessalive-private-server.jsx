import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-private-server');
}

export default function OldSchoolMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-private-server" />;
}
