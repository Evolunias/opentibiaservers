import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-register');
}

export default function OldSchoolTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-register" />;
}
