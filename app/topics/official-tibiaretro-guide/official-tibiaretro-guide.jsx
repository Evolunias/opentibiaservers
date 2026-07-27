import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-guide');
}

export default function OfficialTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-guide" />;
}
