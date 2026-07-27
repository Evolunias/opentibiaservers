import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-tibiaretro-server');
}

export default function WithActivePlayersTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-tibiaretro-server" />;
}
