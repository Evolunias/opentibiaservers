import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro');
}

export default function OldSchoolTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro" />;
}
