import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-register');
}

export default function OldSchoolAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-register" />;
}
