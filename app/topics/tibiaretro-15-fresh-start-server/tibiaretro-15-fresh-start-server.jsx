import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-fresh-start-server');
}

export default function Tibiaretro15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-fresh-start-server" />;
}
