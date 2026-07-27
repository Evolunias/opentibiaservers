import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-54-fresh-start-server');
}

export default function Tibiaretro854FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-54-fresh-start-server" />;
}
