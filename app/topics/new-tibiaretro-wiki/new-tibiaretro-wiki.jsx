import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-wiki');
}

export default function NewTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-wiki" />;
}
