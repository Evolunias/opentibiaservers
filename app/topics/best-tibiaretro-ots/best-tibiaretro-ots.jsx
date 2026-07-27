import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-ots');
}

export default function BestTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-ots" />;
}
