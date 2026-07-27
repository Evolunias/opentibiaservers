import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-ot');
}

export default function FreshStartTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-ot" />;
}
