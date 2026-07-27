import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-wiki');
}

export default function OfficialTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-wiki" />;
}
