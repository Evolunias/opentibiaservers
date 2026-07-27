import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-wiki');
}

export default function FreshStartMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-wiki" />;
}
