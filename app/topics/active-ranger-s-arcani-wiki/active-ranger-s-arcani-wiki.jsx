import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-wiki');
}

export default function ActiveRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-wiki" />;
}
