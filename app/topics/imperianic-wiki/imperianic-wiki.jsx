import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-wiki');
}

export default function ImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="imperianic-wiki" />;
}
