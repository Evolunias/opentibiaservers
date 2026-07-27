import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-guide');
}

export default function OldSchoolTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-guide" />;
}
