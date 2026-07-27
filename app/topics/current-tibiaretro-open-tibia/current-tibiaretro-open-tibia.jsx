import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-open-tibia');
}

export default function CurrentTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-open-tibia" />;
}
