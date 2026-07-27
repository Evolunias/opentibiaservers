import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-server');
}

export default function TopTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-server" />;
}
