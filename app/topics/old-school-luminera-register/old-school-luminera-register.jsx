import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-register');
}

export default function OldSchoolLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-register" />;
}
