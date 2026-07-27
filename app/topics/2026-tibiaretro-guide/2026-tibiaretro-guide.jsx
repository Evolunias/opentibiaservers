import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiaretro-guide');
}

export default function Keyword2026TibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiaretro-guide" />;
}
