import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-register');
}

export default function OldSchoolMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-register" />;
}
