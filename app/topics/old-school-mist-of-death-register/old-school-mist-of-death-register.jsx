import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-register');
}

export default function OldSchoolMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-register" />;
}
