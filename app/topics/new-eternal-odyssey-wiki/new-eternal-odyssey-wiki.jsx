import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-wiki');
}

export default function NewEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-wiki" />;
}
