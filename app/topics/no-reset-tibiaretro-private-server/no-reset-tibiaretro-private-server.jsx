import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-private-server');
}

export default function NoResetTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-private-server" />;
}
