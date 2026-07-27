import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-open-tibia');
}

export default function OldSchoolTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-open-tibia" />;
}
