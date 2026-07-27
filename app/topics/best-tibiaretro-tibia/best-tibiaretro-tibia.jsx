import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-tibia');
}

export default function BestTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-tibia" />;
}
