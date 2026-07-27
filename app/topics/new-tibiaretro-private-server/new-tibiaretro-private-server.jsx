import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-private-server');
}

export default function NewTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-private-server" />;
}
