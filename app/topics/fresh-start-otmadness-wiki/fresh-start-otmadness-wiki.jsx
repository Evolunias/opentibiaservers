import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-wiki');
}

export default function FreshStartOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-wiki" />;
}
