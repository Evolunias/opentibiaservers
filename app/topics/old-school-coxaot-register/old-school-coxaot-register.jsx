import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-register');
}

export default function OldSchoolCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-register" />;
}
