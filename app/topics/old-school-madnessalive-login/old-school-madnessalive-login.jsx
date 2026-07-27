import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-login');
}

export default function OldSchoolMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-login" />;
}
