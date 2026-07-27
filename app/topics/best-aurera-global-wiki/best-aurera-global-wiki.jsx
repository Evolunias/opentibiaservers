import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-wiki');
}

export default function BestAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-wiki" />;
}
