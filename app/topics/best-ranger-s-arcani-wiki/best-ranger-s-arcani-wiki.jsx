import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-wiki');
}

export default function BestRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-wiki" />;
}
