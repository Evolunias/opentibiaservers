import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-login');
}

export default function OldSchoolTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-login" />;
}
