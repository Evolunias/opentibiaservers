import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-private-server');
}

export default function CustomTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-private-server" />;
}
