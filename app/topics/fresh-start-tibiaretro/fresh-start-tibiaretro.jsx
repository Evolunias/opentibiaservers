import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro');
}

export default function FreshStartTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro" />;
}
