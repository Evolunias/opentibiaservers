import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-wiki');
}

export default function PopularRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-wiki" />;
}
