import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-register');
}

export default function OldSchoolRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-register" />;
}
