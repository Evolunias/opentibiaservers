import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-register');
}

export default function OldSchoolSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-register" />;
}
