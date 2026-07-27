import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-wiki');
}

export default function BestMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-wiki" />;
}
