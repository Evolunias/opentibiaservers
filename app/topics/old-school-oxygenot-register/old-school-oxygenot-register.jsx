import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-register');
}

export default function OldSchoolOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-register" />;
}
