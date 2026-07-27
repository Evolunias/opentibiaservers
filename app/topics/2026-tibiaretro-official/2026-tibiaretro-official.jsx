import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiaretro-official');
}

export default function Keyword2026TibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiaretro-official" />;
}
