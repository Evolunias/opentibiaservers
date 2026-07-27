import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-wiki');
}

export default function PremiaWikiKeywordPage() {
  return <StaticKeywordPage slug="premia-wiki" />;
}
