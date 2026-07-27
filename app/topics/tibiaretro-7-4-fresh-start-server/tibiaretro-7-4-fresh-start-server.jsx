import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-fresh-start-server');
}

export default function Tibiaretro74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-fresh-start-server" />;
}
