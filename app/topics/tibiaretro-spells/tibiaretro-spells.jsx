import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-spells');
}

export default function TibiaretroSpellsKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-spells" />;
}
