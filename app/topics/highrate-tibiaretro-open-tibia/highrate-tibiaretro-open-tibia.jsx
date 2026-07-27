import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-open-tibia');
}

export default function HighrateTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-open-tibia" />;
}
