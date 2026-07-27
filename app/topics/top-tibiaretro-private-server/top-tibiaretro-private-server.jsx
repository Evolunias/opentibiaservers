import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-private-server');
}

export default function TopTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-private-server" />;
}
