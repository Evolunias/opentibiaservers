import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-guide');
}

export default function ActiveTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-guide" />;
}
