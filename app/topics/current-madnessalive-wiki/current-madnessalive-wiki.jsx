import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-wiki');
}

export default function CurrentMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-wiki" />;
}
