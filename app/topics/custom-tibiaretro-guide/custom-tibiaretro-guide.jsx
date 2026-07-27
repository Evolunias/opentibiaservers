import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-guide');
}

export default function CustomTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-guide" />;
}
