import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-wiki');
}

export default function OfficialRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-wiki" />;
}
