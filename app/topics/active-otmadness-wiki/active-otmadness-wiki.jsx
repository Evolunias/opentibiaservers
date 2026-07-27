import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-wiki');
}

export default function ActiveOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-wiki" />;
}
