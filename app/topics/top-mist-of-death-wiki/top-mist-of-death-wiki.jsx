import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-wiki');
}

export default function TopMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-wiki" />;
}
