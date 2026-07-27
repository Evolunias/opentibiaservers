import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-wiki');
}

export default function CustomMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-wiki" />;
}
