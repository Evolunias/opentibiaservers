import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-ot');
}

export default function TopTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-ot" />;
}
