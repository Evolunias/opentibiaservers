import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-wiki');
}

export default function LowrateOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-wiki" />;
}
