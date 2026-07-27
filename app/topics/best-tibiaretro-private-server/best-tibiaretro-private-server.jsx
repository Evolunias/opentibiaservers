import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-private-server');
}

export default function BestTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-private-server" />;
}
