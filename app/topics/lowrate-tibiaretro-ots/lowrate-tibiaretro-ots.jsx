import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-ots');
}

export default function LowrateTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-ots" />;
}
