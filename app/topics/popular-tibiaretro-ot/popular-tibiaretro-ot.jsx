import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-ot');
}

export default function PopularTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-ot" />;
}
