import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-wiki');
}

export default function NewSeasonTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-wiki" />;
}
