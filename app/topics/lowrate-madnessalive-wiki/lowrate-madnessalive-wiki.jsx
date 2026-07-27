import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-wiki');
}

export default function LowrateMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-wiki" />;
}
