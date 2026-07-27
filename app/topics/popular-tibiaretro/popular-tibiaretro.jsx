import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro');
}

export default function PopularTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro" />;
}
