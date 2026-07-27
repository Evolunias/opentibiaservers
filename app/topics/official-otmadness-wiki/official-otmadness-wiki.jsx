import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-wiki');
}

export default function OfficialOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-wiki" />;
}
