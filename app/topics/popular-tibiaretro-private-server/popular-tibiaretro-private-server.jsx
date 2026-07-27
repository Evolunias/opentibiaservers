import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-private-server');
}

export default function PopularTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-private-server" />;
}
