import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro');
}

export default function CurrentTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro" />;
}
