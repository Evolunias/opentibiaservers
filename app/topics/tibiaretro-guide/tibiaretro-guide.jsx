import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-guide');
}

export default function TibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-guide" />;
}
