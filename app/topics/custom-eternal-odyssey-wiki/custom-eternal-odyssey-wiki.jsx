import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-wiki');
}

export default function CustomEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-wiki" />;
}
