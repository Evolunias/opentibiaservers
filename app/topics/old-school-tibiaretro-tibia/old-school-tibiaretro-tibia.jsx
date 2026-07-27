import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-tibia');
}

export default function OldSchoolTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-tibia" />;
}
