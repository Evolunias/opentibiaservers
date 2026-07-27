import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-official');
}

export default function BestTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-official" />;
}
