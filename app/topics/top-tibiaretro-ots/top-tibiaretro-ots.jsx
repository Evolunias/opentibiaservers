import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-ots');
}

export default function TopTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-ots" />;
}
