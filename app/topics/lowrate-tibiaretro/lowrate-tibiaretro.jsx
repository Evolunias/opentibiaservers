import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro');
}

export default function LowrateTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro" />;
}
