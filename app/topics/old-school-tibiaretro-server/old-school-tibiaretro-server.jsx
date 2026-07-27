import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-server');
}

export default function OldSchoolTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-server" />;
}
