import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-wiki');
}

export default function BestOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-wiki" />;
}
