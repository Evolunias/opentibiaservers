import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-register');
}

export default function OldSchoolTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-register" />;
}
