import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-official');
}

export default function LowrateTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-official" />;
}
