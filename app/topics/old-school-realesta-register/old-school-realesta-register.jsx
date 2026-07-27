import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-register');
}

export default function OldSchoolRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-register" />;
}
