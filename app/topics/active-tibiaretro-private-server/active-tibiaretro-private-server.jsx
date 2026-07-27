import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-private-server');
}

export default function ActiveTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-private-server" />;
}
