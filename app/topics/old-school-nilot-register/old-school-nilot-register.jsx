import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-register');
}

export default function OldSchoolNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-register" />;
}
