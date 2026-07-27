import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-tibia');
}

export default function CurrentTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-tibia" />;
}
