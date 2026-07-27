import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-ots');
}

export default function CurrentTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-ots" />;
}
