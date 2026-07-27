import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-wiki');
}

export default function CurrentOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-wiki" />;
}
