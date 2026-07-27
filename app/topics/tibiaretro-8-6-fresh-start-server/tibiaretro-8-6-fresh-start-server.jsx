import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-fresh-start-server');
}

export default function Tibiaretro86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-fresh-start-server" />;
}
