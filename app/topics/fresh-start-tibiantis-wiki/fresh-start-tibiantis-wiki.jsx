import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-wiki');
}

export default function FreshStartTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-wiki" />;
}
