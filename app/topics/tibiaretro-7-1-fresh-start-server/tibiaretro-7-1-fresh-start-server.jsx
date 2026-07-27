import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-fresh-start-server');
}

export default function Tibiaretro71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-fresh-start-server" />;
}
