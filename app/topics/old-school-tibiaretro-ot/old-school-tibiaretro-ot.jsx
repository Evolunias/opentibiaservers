import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-ot');
}

export default function OldSchoolTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-ot" />;
}
