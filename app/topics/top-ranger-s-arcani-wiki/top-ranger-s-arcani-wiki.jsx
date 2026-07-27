import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-wiki');
}

export default function TopRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-wiki" />;
}
