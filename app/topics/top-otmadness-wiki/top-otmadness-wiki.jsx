import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-wiki');
}

export default function TopOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-wiki" />;
}
