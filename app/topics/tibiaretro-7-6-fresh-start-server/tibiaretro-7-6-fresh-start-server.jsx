import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-fresh-start-server');
}

export default function Tibiaretro76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-fresh-start-server" />;
}
