import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-open-tibia');
}

export default function BestTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-open-tibia" />;
}
