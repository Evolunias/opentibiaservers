import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-private-server');
}

export default function FreshStartTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-private-server" />;
}
