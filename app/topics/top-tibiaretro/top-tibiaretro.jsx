import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro');
}

export default function TopTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro" />;
}
