import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-wiki');
}

export default function CurrentRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-wiki" />;
}
