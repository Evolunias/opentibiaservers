import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-server');
}

export default function CurrentTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-server" />;
}
