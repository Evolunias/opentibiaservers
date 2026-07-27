import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-wiki');
}

export default function LowrateTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-wiki" />;
}
