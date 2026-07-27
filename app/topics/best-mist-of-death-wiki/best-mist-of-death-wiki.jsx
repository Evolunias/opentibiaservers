import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-wiki');
}

export default function BestMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-wiki" />;
}
