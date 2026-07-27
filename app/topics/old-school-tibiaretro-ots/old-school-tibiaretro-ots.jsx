import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-ots');
}

export default function OldSchoolTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-ots" />;
}
