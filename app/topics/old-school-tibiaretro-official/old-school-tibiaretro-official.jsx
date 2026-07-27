import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-official');
}

export default function OldSchoolTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-official" />;
}
