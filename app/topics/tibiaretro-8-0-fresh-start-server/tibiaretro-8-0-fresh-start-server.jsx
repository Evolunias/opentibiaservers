import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-fresh-start-server');
}

export default function Tibiaretro80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-fresh-start-server" />;
}
