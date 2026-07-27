import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-tibia');
}

export default function HighrateTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-tibia" />;
}
