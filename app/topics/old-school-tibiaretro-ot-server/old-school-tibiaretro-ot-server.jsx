import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-ot-server');
}

export default function OldSchoolTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-ot-server" />;
}
