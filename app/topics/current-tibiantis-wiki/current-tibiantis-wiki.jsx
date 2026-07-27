import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-wiki');
}

export default function CurrentTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-wiki" />;
}
