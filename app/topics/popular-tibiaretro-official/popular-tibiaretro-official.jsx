import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-official');
}

export default function PopularTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-official" />;
}
