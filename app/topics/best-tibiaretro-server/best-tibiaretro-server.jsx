import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-server');
}

export default function BestTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-server" />;
}
