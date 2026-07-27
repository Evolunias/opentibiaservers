import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-official');
}

export default function TopTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-official" />;
}
