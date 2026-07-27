import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-wiki');
}

export default function NewOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-wiki" />;
}
