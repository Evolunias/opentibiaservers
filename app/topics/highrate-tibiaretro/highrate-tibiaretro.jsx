import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro');
}

export default function HighrateTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro" />;
}
