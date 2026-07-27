import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-ot');
}

export default function CurrentTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-ot" />;
}
