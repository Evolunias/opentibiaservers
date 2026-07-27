import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-ot-server');
}

export default function BestTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-ot-server" />;
}
