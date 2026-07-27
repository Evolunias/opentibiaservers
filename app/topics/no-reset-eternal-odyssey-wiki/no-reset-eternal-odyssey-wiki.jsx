import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-wiki');
}

export default function NoResetEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-wiki" />;
}
