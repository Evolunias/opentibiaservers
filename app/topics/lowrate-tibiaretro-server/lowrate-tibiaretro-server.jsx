import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-server');
}

export default function LowrateTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-server" />;
}
