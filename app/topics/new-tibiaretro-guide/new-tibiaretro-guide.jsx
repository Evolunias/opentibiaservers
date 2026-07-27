import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-guide');
}

export default function NewTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-guide" />;
}
