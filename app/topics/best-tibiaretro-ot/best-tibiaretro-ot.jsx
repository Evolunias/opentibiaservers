import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-ot');
}

export default function BestTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-ot" />;
}
