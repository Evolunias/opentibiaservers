import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-fresh-start-server');
}

export default function Tibiaretro84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-fresh-start-server" />;
}
