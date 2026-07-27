import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-private-server');
}

export default function LowrateTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-private-server" />;
}
