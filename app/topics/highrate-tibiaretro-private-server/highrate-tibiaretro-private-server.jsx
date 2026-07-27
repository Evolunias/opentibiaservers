import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-private-server');
}

export default function HighrateTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-private-server" />;
}
