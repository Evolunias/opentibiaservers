import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-wiki');
}

export default function OtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="otmadness-wiki" />;
}
