import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-register');
}

export default function OldSchoolEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-register" />;
}
