import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-tibia');
}

export default function LowrateTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-tibia" />;
}
