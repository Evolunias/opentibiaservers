import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-ots');
}

export default function FreshStartTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-ots" />;
}
