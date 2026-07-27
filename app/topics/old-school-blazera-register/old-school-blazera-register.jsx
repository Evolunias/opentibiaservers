import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-register');
}

export default function OldSchoolBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-register" />;
}
