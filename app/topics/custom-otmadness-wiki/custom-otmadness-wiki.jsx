import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-wiki');
}

export default function CustomOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-wiki" />;
}
