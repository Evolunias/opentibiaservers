import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-wiki');
}

export default function LowrateRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-wiki" />;
}
