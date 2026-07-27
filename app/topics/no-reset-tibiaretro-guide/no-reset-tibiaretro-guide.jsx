import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-guide');
}

export default function NoResetTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-guide" />;
}
