import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-fresh-start-server');
}

export default function Tibiaretro96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-fresh-start-server" />;
}
