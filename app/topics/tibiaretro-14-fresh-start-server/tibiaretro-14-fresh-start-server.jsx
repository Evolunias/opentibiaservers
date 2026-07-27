import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-fresh-start-server');
}

export default function Tibiaretro14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-fresh-start-server" />;
}
