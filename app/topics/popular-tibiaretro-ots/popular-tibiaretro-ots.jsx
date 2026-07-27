import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-ots');
}

export default function PopularTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-ots" />;
}
