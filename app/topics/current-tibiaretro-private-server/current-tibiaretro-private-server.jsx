import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-private-server');
}

export default function CurrentTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-private-server" />;
}
