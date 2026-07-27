import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-fresh-start-server');
}

export default function Tibiaretro12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-fresh-start-server" />;
}
