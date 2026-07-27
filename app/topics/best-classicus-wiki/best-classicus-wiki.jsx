import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-wiki');
}

export default function BestClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-wiki" />;
}
