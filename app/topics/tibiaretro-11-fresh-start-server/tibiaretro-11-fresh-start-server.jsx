import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-fresh-start-server');
}

export default function Tibiaretro11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-fresh-start-server" />;
}
