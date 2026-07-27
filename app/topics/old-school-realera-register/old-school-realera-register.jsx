import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-register');
}

export default function OldSchoolRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-register" />;
}
