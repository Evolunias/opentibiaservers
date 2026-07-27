import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-register');
}

export default function OldSchoolThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-register" />;
}
