import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-wiki');
}

export default function TopMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-wiki" />;
}
