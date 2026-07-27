import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-wiki');
}

export default function FreshStartMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-wiki" />;
}
