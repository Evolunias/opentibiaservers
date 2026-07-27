import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-ot');
}

export default function LowrateTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-ot" />;
}
