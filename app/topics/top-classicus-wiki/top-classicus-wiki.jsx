import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-wiki');
}

export default function TopClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-wiki" />;
}
