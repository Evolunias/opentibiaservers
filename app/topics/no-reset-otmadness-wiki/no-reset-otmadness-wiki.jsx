import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-wiki');
}

export default function NoResetOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-wiki" />;
}
