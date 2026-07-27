import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-private-server');
}

export default function OldSchoolTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-private-server" />;
}
