import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-open-tibia');
}

export default function LowrateTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-open-tibia" />;
}
