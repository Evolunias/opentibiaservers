import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-register');
}

export default function OldSchoolAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-register" />;
}
