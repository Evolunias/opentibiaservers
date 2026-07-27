import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-official');
}

export default function CurrentTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-official" />;
}
