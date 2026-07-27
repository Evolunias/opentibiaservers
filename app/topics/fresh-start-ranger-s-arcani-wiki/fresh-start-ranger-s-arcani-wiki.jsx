import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-wiki');
}

export default function FreshStartRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-wiki" />;
}
