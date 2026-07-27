import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-private-server');
}

export default function TibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-private-server" />;
}
