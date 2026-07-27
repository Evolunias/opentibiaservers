import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-wiki');
}

export default function ActiveEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-wiki" />;
}
