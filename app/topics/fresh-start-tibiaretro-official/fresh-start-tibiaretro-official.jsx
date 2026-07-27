import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-official');
}

export default function FreshStartTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-official" />;
}
