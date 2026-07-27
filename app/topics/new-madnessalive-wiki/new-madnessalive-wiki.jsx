import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-wiki');
}

export default function NewMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-wiki" />;
}
