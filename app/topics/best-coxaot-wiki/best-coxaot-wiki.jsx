import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-wiki');
}

export default function BestCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-wiki" />;
}
